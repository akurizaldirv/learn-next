import HttpStatusCode from "@/constant/httpStatusCode";
import { comments } from "@/shared/data/comments/comments";
import { CommentType } from "@/type/comment";
import { GlobalResponseType } from "@/type/global";
import {NextRequest} from "next/server";

export async function GET(req: NextRequest) {
    const searchParams = req.nextUrl.searchParams;
    const query = searchParams.get("query");
    const filteredComments = query ? comments.filter(comment => comment.comment.includes(query)) : comments;

    const result: GlobalResponseType<CommentType[]> = {
        status: HttpStatusCode.OK,
        message: "Get All Comments Success",
        data: filteredComments
    }
    return new Response(JSON.stringify(result), {
        headers: {
            "Content-Type": "application/json",
        },
        status: HttpStatusCode.OK
    });
}

export async function POST(req: Request) {
    const json: CommentType = await req.json();
    const newComment: CommentType = {
        id: comments.length + 1,
        comment: json.comment,
    };
    comments.push(newComment);

    const response: GlobalResponseType<CommentType> = {
        status: HttpStatusCode.CREATED,
        message: "Comment Created Successfully",
        data: newComment
    }  

    return new Response(JSON.stringify(response), {
        headers: {
            "Content-Type": "application/json",
        },
        status: 201,
    });
}

import HttpStatusCode from "@/constant/httpStatusCode";
import { comments } from "@/shared/data/comments/comments";
import { CommentType } from "@/type/comment";
import { GlobalResponseType } from "@/type/global";

export async function GET() {
    return Response.json(comments);
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

import HttpStatusCode from "@/constant/httpStatusCode";
import { comments } from "@/shared/data/comments/comments";
import { CommentType } from "@/type/comment";
import { GlobalResponseType } from "@/type/global";

export async function GET(
    req: Request,
    { params }: { params: { id: string } }
) {
    const result = comments.find(
        (comment) => comment.id === Number.parseInt(params.id)
    );

    const response: GlobalResponseType<CommentType | null> = {
        status: result ? HttpStatusCode.OK : HttpStatusCode.NOT_FOUND,
        message: result ? "Comment Found" : "Comment not Found ",
        data: result ? result : null,
    };

    return new Response(JSON.stringify(response), {
        headers: {
            "Content-Type": "application/json",
        },
    });
}

export async function PUT(
    req: Request,
    { params }: { params: { id: string } }
) {
    let status: Number | null = null;
    let message: string | null = null;
    let data: CommentType | null = null;

    try {
        const idx = comments.findIndex(
            (comment) => comment.id === Number.parseInt(params.id)
        );
    
        if (idx === -1) {
            throw new Error("Comment not Found");
        }
    
        const json: CommentType = await req.json();        
        comments[idx].comment = json.comment;  
        
        data = {
            id: Number.parseInt(params.id),
            comment: json.comment
        };
        message = "Comment Updated Successfully";
        status = HttpStatusCode.OK;
    } catch (error) {
        if (error instanceof Error) {
            status = HttpStatusCode.BAD_REQUEST;
            message = error.message;
        } else {
            status = HttpStatusCode.INTERNAL_SERVER_ERROR;
            message = "An unexpected error occurred";
        }
    } finally {
        const response: GlobalResponseType<CommentType | null> = {
            status: status,
            message: message,
            data: data
        }
        
        return new Response(JSON.stringify(response), {
            headers: {
                "Content-Type": "application/json"
            },
            status: status ? parseInt(status.toString()) : undefined
        })
    }
}

export async function DELETE(
    req: Request,
    { params }: { params: { id: string } }
) {
    let status: Number | null = null;
    let message: string | null = null;

    try {
        const idx = comments.findIndex(
            (comment) => comment.id === Number.parseInt(params.id)
        );
    
        if (idx === -1) {
            throw new Error("Comment not Found");
        }
        
        comments.splice(idx, 1);
        
        message = "Comment Deleted Successfully";
        status = HttpStatusCode.OK;
    } catch (error) {
        if (error instanceof Error) {
            status = HttpStatusCode.BAD_REQUEST;
            message = error.message;
        } else {
            status = HttpStatusCode.INTERNAL_SERVER_ERROR;
            message = "An unexpected error occurred";
        }
    } finally {
        const response: GlobalResponseType<null> = {
            status: status,
            message: message,
            data: null
        }
        
        return new Response(JSON.stringify(response), {
            headers: {
                "Content-Type": "application/json"
            },
            status: status ? parseInt(status.toString()) : undefined
        })
    }
}

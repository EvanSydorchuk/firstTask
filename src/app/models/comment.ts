export class Comment {
    id: number;
    text: string;
    commentDeepLevel: number;
    subComments: Comment[];
    parentId: number;
}
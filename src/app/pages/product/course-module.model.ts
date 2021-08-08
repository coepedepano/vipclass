export class ICourseModule{
  name: string | undefined;
  content: Array<IContent> | undefined;
}

export class IContent{
    id: number | undefined;
    description : string | undefined;
    duration: number | undefined;
    video: any;
    preview : string | undefined
}
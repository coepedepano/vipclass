import { ICourseModule } from "./course-module.model";


export class ICourse{
    categorieId: number | undefined;
    courseName: string | undefined;
    description: string | undefined;
    cover: string | undefined;
    coinId: number | undefined;
    price: number | undefined;
    producerRoyaltie: string | undefined;
    coproducer: string | undefined;
    coProducerRoyaltie: string | undefined;
    module: ICourseModule | undefined

}
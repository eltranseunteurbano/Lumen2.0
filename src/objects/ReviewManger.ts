import { ServiceStep } from './StepManager';
import { DataBase } from '../hooks/DatabaseContext';


export class ReviewManager {
    UID?: string;
    ROUTE?: string;
    step?: ServiceStep;
    completed: boolean;
    currentReview: number;
    reviews: Review[];

    constructor(step?: ServiceStep, reviewManager?: ReviewManager) {
        this.step = step;
        this.UID = reviewManager ? `review` : undefined;
        this.ROUTE = (reviewManager && this.step) ? `${this.step.ROUTE}/${this.UID}` : undefined;

        this.completed = reviewManager ? reviewManager.completed : false;
        this.currentReview = reviewManager ? reviewManager.currentReview : -1;
        this.reviews = reviewManager ? this.constructorReviews(reviewManager.reviews) : generateDefaultReview();
    }

    startReview() {
        if (this.currentReview == -1) {
            this.currentReview = 0;
            this.setCurrentReview(0);
            let review = this.getCurrentReview();
            review.setStatus(1);
        }
    }

    next() {
        this.getCurrentReview().setStatus(2);
        if (this.currentReview + 1 < this.reviews.length) {
            this.setCurrentReview( this.currentReview + 1)
            this.getCurrentReview().setStatus(1);
        }
      
    }


    back() {
        this.getCurrentReview().setStatus(0);
        if (this.currentReview - 1 >= 0) {
            this.setCurrentReview( this.currentReview - 1)
            this.getCurrentReview().setStatus(1);
        }
    }

    getCurrentReview() {
        return this.reviews[this.currentReview];
    }

    setCurrentReview(value:number){
        this.currentReview = value;
        DataBase.writeDatabase(`${this.ROUTE}/currentReview`, value);
    }

    constructorReviews(reviews: Review[]) {
        let resultReviews: Review[] = [];
        reviews.forEach((review, index) => {
            resultReviews.push(new Review(this, review, `reviews/${index}`));
        });
        return resultReviews;
    }
}

export default ReviewManager;


export class Review {
    reviewManager?: ReviewManager;
    UID?: string;
    ROUTE?: string;
    information: string;
    status: number = 0;

    constructor(reviewManager?: ReviewManager, review?: Review, UID?: string) {
        this.reviewManager = reviewManager;
        this.UID = review ? UID : undefined;
        this.ROUTE = (review && reviewManager) ? `${reviewManager.ROUTE}/${this.UID}`: undefined;

        this.information = review ? review.information : "";
        this.status = review ? review.status : 0;
    }

    setStatus(value:number){
        this.status = value;
        DataBase.writeDatabase(`${this.ROUTE}/status`, value);
    }
}


function generateDefaultReview() {
    function defaultReview(information: string) {
        let review = new Review();
        review.information = information;
        return review;
    }

    return [
        defaultReview("Ver el formulario del usuario."),
        defaultReview("Aprobar o negar solicitud del servicio de energía.")
    ]
}


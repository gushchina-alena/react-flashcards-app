import { makeAutoObservable } from "mobx";

class FlashCardsStore {
    wordsData = [];
    isLoading = false;

    constructor() {
        makeAutoObservable(this);

        this.getData();

        getData = () => {
            
        }
    }
}

export default FlashcardsStore; 

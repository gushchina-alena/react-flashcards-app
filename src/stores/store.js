import { makeAutoObservable } from "mobx";
class store {
    words = [];
    isLoading = false;

    constructor() {
        makeAutoObservable(this);
        this.fetchWords();
    }

    fetchWords = () => {
        fetch("/api/words")
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error("Please try again later")
                }
            })
            .then((response) => (this.words = response));
    };
}

export default store; 

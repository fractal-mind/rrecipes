const storage = window.localStorage

class Store {
  constructor(id){
    this.id = id;
    const initialState = this.get();
    if (!initialState) {
      this.set({
        recipes: [
          {
            title: "Sample Recipe",
            ingredients: ["ingredient one", "ingredient two"],
            steps: ["buy the ingredients", "prepare the food", "convert the aforementioned food into energy using your digestive system"]
          }
        ]
      });
    }
  set(data){

  }
  get(){

  }
  }
}

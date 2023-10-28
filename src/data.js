const pagesKey = "pages";
let pagesJson = localStorage.getItem(pagesKey);
let pagesStore= JSON.parse(pagesJson);

export default{

    save(){
        localStorage.setItem(pagesKey , JSON.stringify(pagesStore));
    },
    addPage(page){
        pagesStore.push(page);
        this.save();
    },
    getAllPages(){
        return pagesStore;
    },

    getSinglePage(index){
        return pagesStore[index];
    },

    editPage(index, page){
        pagesStore[index] = page ;
        this.save();
    },
    removePage(index) {
        pagesStore.splice(index, 1);
        this.save();
        
      }

}



Vue.createApp({
    data() {
        return {
            valueInput: '',
            PositionsList: [],
            OrdersList: []
        };
    },
    methods: {
        handlyInput(event)  {
            this.valueInput = event.target.value;
        },

        addPosition(){
            if(this.valueInput === '') { return; }
            this.PositionsList.push({
                title: this.valueInput,
                id: Math.random()
            });
            this.valueInput = '';
        },

        doCheck(index, type) {

            if(type === 'notinorder') {
                const inorderMask = this.PositionsList.splice(index, 1);
                this.OrdersList.push(...inorderMask);
            } else {
                const notinorderMask = this.OrdersList.splice(index, 1);
                this.PositionsList.push(...notinorderMask);
            }
        },

        removeMask (index, type){
            const menuList = type === 'notinorder' ? this.PositionsList : this.OrdersList;
            menuList.splice(index,1);
        }
    } 
}).mount('#app');




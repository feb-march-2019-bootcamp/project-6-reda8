import vue from 'vue/dist/vue';

new vue ({
    el: "#app",
    
    data: {
    listData: [
        {
            courseName: 'Web Development',
            price: 300 ,
            selectCourse: true
        },
        {
            courseName: 'Design',
            price: 400 ,
            selectCourse: false
        },
        {
            courseName: 'Integration',
            price: 250 ,
            selectCourse: false
        },
        {
            courseName: 'Training',
            price: 220 ,
            selectCourse: false
        }
    ]
    },

    methods:{
        activeList: function(active){
            active.selectCourse = !active.selectCourse;
            },
         total: function(){
          let sum = 0;
          this.listData.forEach(function(list) {
              if (list.selectCourse){
             sum = sum + list.price;
              }
          });

        return sum;
        }
    }
    });

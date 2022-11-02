    let arr = []
    for (let i = 100; i >= 1; i -= 10) {
        if (i % 20 === 0) {
            for (let j = i; j > (i - 10); j--) {
                arr.push({id:j,icon:''})
            }
        }

        else {
            for (let j = (i - 9); j <= i; j++) {
                arr.push({id:j,icon:'',player:""})
            }
        }
    }




    const snakes=[{from:37,to:18,icon:'🐍'},
    {from:65,to:36,icon:'🐍'},
    {from:70,to:54,icon:'🐍'},
    {from:81,to:77,icon:'🐍'},
    {from:9,to:30,icon:'🚀'},
    {from:25,to:44,icon:'🚀'},
    {from:41,to:62,icon:'🚀'},
    {from:74,to:95,icon:'🚀'}]
    arr.forEach(element => {
        snakes.forEach(snake => {
            if(element.id===snake.from){
                element.icon=snake.icon
            }
        });
    });

    const snakeandladder = [
        {
            snakes:
        {
            snakesfrom:[37, 65, 70, 81],
        snakesto:[18, 36, 54, 77]
        },
        ladders:
        {
            ladderfrom:[9, 25, 41, 74],
            laddersto:[30, 44, 62, 95]
        }
    }
    ]
    

export default arr




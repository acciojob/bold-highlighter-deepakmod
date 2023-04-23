        let link=document.getElementsByTagName("a")[0];
        let bold=document.getElementsByTagName("strong");
        function highlight(){
            for (let i = 0; i < bold.length; i++) {
                bold[i].style.color="green";
            }
        }
        function return_normal(){
            for (let i = 0; i < bold.length; i++) {
                bold[i].style.color="black";
            }
        }

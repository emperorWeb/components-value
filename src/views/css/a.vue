<template>
<div>
    <div class="trends-list">
         <ul>
        <li>
            <span>1</span>
        </li>
        <li>
            <span>2</span>
        </li>
        <li>
            <span>3</span>
        </li>
        <li>
            <span>4</span>
        </li>
        <li>
            <span>5</span>
        </li>
         </ul>
    </div>
</div>
</template>

<script>
export default {
    data(){
        return {

        }
    }
}
</script>

<style lang="scss" scoped>
ul{ width: 80%; margin: 30px auto;}
            ul li{  border: 1px solid #999;  list-style: none; float: left; margin-right: 1%; position: relative; width: 16%; height: 100%;}
            ul li::before{ content: ""; padding-top: 100%; vertical-align: middle; display: block;}
 
            ul li span{ position: absolute; top: 50%; left: 50%; 
                        -webkit-transform: translate(-50%, -50%);
                           -moz-transform: translate(-50%, -50%);
                            -ms-transform: translate(-50%, -50%);
                             -o-transform: translate(-50%, -50%);
                    }
</style>
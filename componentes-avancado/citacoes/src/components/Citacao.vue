<template>
    <div class="citacao">
        <div>
            <slot name="texto"></slot>
            <slot name="fonte"></slot>
            <div class="autor">
                <slot name="autor"></slot>
            </div>            
        </div>
    </div>
</template>

<script>


export default {
    created(){
        console.log('CREATED');        
    },
    destroyed(){
        console.log('DESTROYED');        
    },
    activated(){
        console.log('ACTIVATED');        
    },
    deactivated(){
        console.log('DEACTIVATED');        
    }
}
</script>

<style scoped>
    .citacao {
        border: 1px solid #DDD;
        background-color: rgba(0, 0, 0, .1);
        padding: 25px;
        max-width: 450px;
    }

    .autor{
        float: right;
    }
</style>

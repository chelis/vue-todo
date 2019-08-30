<template>
 <div :id="modalId" class="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-top">
            <a href="#" class="close" @click.prevent="close()">X</a>
        </div>
        <div class="modal-content">
          <slot id="modal-content" />
        </div>
      </div>
    </div>
  </div>
</template>

  <script>
  export default {
    name: 'Modal',
    props: {
      modalId: String 
    },
    methods: {
      close() {
        this.$emit('close')
      }
    }

  }
  </script>

  <style scoped>
 .modal-content {
   margin-left: 4rem;
   margin-right: 4rem;
 }
 .modal-footer button{
   position: absolute;
   bottom: 2rem;
   right:2rem;

 }
 .modal-mask {
   background-color:rgba(0,0,0,0.5);
   width: 100%;
   height: 100%;
   position: fixed;
   top: 0;
   left: 0;
 }

 .modal-wrapper {
   background-color: white;
   position: relative;
   height: 75%;
   margin: 10%; 
   max-width: 500px;
   max-height: 300px;  
 }

 .modal-top .close {
   float: right;
   text-decoration: none;
   
 }

 .modal .modal-top {
  padding-bottom: 1rem;
 }
 
</style>

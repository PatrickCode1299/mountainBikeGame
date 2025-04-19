<template>
    <div class="bg-full">
    <div class="overlay d-flex justify-content-center align-items-center">
    <h2>Super Speed <br /> Bike Racing</h2>
    <RouterLink to="/start" class="start-btn">Start Now</RouterLink>
    </div>
    </div>
      
      </template>
      
      <script setup>
        import { ref } from 'vue';
        import { RouterLink } from 'vue-router';
      </script>
    <style  scoped>
    .bg-full {
        background-image: url("./gameUiComponent/bikers.jpg");
        background-attachment: fixed;
        background-repeat: no-repeat;
        background-position: center;  /* Center the image */
        background-size: cover;  /* Ensures the image covers the entire background without distortion */
        height: 100vh;  /* Ensure the container takes up the full viewport height */
        width: 100%;  /* Ensure the container takes up the full viewport width */
        position: relative;
    }
    .overlay{
        background-color: rgba(0, 0, 0, 0.699);
        width:100%;
        height:100%;
        position:absolute;
        left:0px;
        top:0px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction:column;
        color: white;
        font-weight: bold;
        font-size:55px;
        text-shadow: 5px 2px 2px rgb(238, 107, 0);
        text-transform: uppercase;
        word-wrap: break-word;
        font-family: Sarpanch;
        font-weight: 900;
    }
    .start-btn{
        background-color:rgb(179, 116, 1);
        color:white;
        font-weight:bold;
        font-size:35px;
        font-family:sans-serif;
        border:none;
        padding:10px 10px;
        cursor: pointer;
        border-radius:20px;
        width:250px;
    }
    
    
    </style>
<template>
<v-app>
  <v-layout align-center justify-center>
    
  
      
    <v-flex xs12 sm8 md4>
      <v-card class="elevation-12">
        <v-toolbar dark color="primary" tabs>
        
  
        <template v-slot:extension>
          <v-tabs
            v-model="tabs"
            fixed-tabs
            color="transparent"
            icons-and-text
          >
            <v-tabs-slider></v-tabs-slider>
            <v-tab :key="1" >
              Iniciar sesión
              <v-icon>lock</v-icon>
            </v-tab>
  
            <v-tab :key="2" >
              Registrarse
              <v-icon>favorite</v-icon>
            </v-tab>
          </v-tabs>
        </template>
        </v-toolbar>
        <v-card-text>
          <v-tabs-items v-model="tabs" class="white elevation-1">
            <v-tab-item
              :key="1"
              
            >
              <v-card>
                <v-card-text>
                  <v-form @submit.prevent="login" id="login-form">
                    <v-text-field v-model="editedItem.user" prepend-icon="person"  label="Login" type="text"></v-text-field>
                    <v-text-field v-model="editedItem.pass" prepend-icon="lock"  label="Password" type="password"></v-text-field>
                    <v-spacer></v-spacer>
                    
                  </v-form>
                </v-card-text>
              </v-card>
            </v-tab-item>
            <v-tab-item
              :key="2"
              
            >
              <v-card>
                <v-card-text>
                  sadsa

                </v-card-text>
              </v-card>
            </v-tab-item>
          </v-tabs-items>
          
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" type="submit" form="login-form">Login</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</v-app>
    
</template>
<script>
import UsuarioService from '../services/UsuariosService';
export default {
  data:() => ({
    tabs:[],
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    datos:"",
    error:"",
    editedItem:{
      user:"",
      pass:""
    }
  }),
  methods: {
    login () {
      var self=this;
      UsuarioService.loginUser(self.editedItem).then(function(datos){
        if(datos.code==1){
          self.$session.set("token",datos.data.token);
          self.$session.set("userData",datos.data.user_data);
          location.href="/";
        }
        
      }).catch(function(error){
        if (error)
          self.$session.remove("userData");
      })
      
      
    }
  },
  created:function(){
    
  }
}
</script>
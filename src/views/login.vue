<template>
<v-app>
  <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>Iniciar Sesión</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form @submit.prevent="login" id="login-form">
                  <v-text-field v-model="editedItem.user" prepend-icon="person"  label="Login" type="text"></v-text-field>
                  <v-text-field v-model="editedItem.pass" prepend-icon="lock"  label="Password" type="password"></v-text-field>
                  <v-spacer></v-spacer>
                  
                </v-form>
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
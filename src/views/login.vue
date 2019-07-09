<template>
<v-app>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4>



        <v-card class="elevation-12">
          
          <v-toolbar
            color="cyan"
            dark
            tabs
          >            
            <template v-slot:extension>
              <v-tabs
                v-model="model"
                centered
                color="cyan"
                slider-color="yellow"
              >
                <v-tab
                  href="#tab-1"
                >
                  Item 1
                </v-tab>
                <v-tab
                  href="#tab-2"
                >
                  Item 2
                </v-tab>
              </v-tabs>
            </template>
          </v-toolbar>

          <v-tabs-items v-model="model">
            <v-tab-item
              value="tab-1"
            >
              <v-card flat>
                <v-card-text v-text="text"></v-card-text>
              </v-card>
            </v-tab-item>

            <v-tab-item
              value="tab-2"
            >
              <v-card flat>
                <v-card-text v-text="text"></v-card-text>
              </v-card>
            </v-tab-item>
          </v-tabs-items>
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
    model: 'tab-2',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
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
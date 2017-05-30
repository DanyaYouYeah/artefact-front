<template>
  <v-app id="index">
    <v-navigation-drawer temporary v-model="drawer" :mini-variant.sync="mini" light>
      <v-list class="pa-0">
        <v-list-item>
          <v-list-tile avatar tag="div">
            <v-list-tile-content>
              <img src="../public/assets/artefact-menu.svg" class="artefact-copy">
            </v-list-tile-content>
            <v-list-tile-action>
              <v-btn icon dark @click.native.stop="mini = !mini">
                <v-icon>chevron_left</v-icon>
              </v-btn>
            </v-list-tile-action>
          </v-list-tile>
        </v-list-item>
      </v-list>
      <v-list class="pt-0" dense>
        <v-divider></v-divider>
        <v-list-item v-for="item in items" :key="item">
          <v-list-tile :href="item.href">
            <v-list-tile-content>
              <v-list-tile-title class="navMenuList">{{ item.title }}
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile> 
        </v-list-item>
      </v-list>

       <div class ="catalogueTittle">
         Каталог
       </div>
          <v-list>
          <v-list-group v-for="catalogue in catalogue" :value="catalogue.active" v-bind:key="catalogue.title">
            <v-list-tile slot="item">
              <v-list-tile-content>
                <v-list-tile-title class="catalogueList">{{ catalogue.title }}</v-list-tile-title>
              </v-list-tile-content>
              <v-list-tile-action>
                <v-icon dark>keyboard_arrow_down</v-icon>
              </v-list-tile-action>
            </v-list-tile>
            <v-list-item v-for="subItem in catalogue.items" v-bind:key="subItem.title">
              <v-list-tile>
                <v-list-tile-content>
                  <v-list-tile-title class="subCatalogueList">{{ subItem.title }}</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
            </v-list-item>
          </v-list-group>
        </v-list> 

        <div class = "menuFooter">
      <div class="adminLinkText"> Перейти в </div>
      <a class="adminLink" href = '/'>панель Администратора</a>
        </div>
    </v-navigation-drawer>
    <div id="toolbar-image">
    <v-toolbar class="transparent elevation-0">
      <v-toolbar-side-icon light @click.native.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title class="hidden-sm-and-down"></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-text-field label="Поиск..." v-model="message" hide-details single-line light></v-text-field>
      <v-icon light right>search</v-icon>
    </v-toolbar>
    </div>
    <main>
      <v-container fluid>
        <center>
        <img src="../public/assets/artefact.svg" class="artefact">
        <div class="tittle">• МЫ СОХРАНЯЕМ ПРОШЛОЕ •</div>
        <div class = "searchText">
         <input class='inputFormSearch' v-model="message" placeholder="Поиск">
         <img src="../public/assets/searchShape.svg" class="search-shape" v-on:click="counter += 1">
        </div>

         <div class = "pickersWrapper">
         <v-flex xs3>
           <v-layout row wrap class="mrl-5">
           <v-select v-bind:items="periods" v-model="e4" label="Переоид" dark single-line auto class="ma-3" v-tooltip:top="{ html: 'Выберите период' }">
            </v-select>
           <v-select v-bind:items="states" v-model="e2" label="Все" dark single-line auto class="ma-3" v-tooltip:top="{ html: 'Выберите уточняющий промежуток времени' }">
            </v-select>
            <v-select v-bind:items="cultures" v-model="e3" label="Культура" dark single-line auto class="ma-3" v-tooltip:top="{ html: 'Выберите культуру' }">
            </v-select>
           <v-select v-bind:items="types" v-model="e4" label="Тип" dark single-line auto class="ma-3" v-tooltip:top="{ html: 'Выберите тип объекта' }">
            </v-select>
            <div style ="padding-top:10px">
            <v-btn dark flat>Искать</v-btn>
            </div>
             </v-layout>
          </v-flex>
          </div>
          </v-layout>
          </center>

        <!--v-router-->
                <p>В поиске написано: {{message}}</p>
      </v-container>
    <footer>
        <img src="../public/assets/fefu-logo.png" srcset="../public/assets/fefu-logo@2x.png 2x, ../public/assets/fefu-logo@3x.png 3x" class="fefu-logo">
    </footer>
    </main>     
  </v-app>
</template>

<script>
 import json from './mock.js'

  export default {
    name: 'index',
    components:{
    },
    data () {
      return {
        drawer: null,
        mini: false,
        right: null,
        message: '',
        e1: '',
        e2: '',
        e3: '',
        e4: '',
        textSearchParam: '',
        items: json.items,
        catalogue: json.catalogue,
        periods: json.periods,
        states: json.states,
        cultures: json.cultures,
        types: json.types
      }
    }
  }
</script>

<style lang="stylus">
  @import './stylus/main'
  @import './css/main-style.css'
  

 .list--dense .list__tile__title {
  font-size: 20px;
 }

 .catalogueList{
  font-family: OpenSans-Light;
	font-size: 16px;
	font-weight: 300;
	letter-spacing: -0.6px;
	color: #383838;
  height: 18px;
  padding-left: 22px;
}


.subCatalogueList{
  font-family: OpenSans-Light;
	font-size: 14px;
	font-weight: 300;
	letter-spacing: -0.5px;
	color: #383838;
  padding-left: 30px;
}

.catalogueTittle{
  padding-top: 30px;
  font-family: OpenSans;
	font-size: 25px;
	font-weight: 600;
	letter-spacing: -1px;
	color: #383838;
  padding-left: 16px;
}

.list--group .list__tile {
  padding-left: 20px;
}

.navMenuList{
    font-family: OpenSans;
	font-size: 20px;
	font-weight: 300;
	letter-spacing: -0.8px;
	color: #383838;
}

</style>
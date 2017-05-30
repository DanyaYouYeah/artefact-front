<template>
<v-app id="navbar">
    <v-navigation-drawer temporary v-model="drawer" :mini-variant.sync="mini" light>
      <v-list class="pa-0">
        <v-list-item>
          <v-list-tile avatar tag="div">
            <v-list-tile-content>
              <img src="/public/assets/artefact-menu.svg" class="artefact-copy">
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

       <div class="catalogueTittle">
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
    </v-app>
</template>

<<script>
 import json from '../mock.js'

  export default {
    name: 'navbar',
    components:{
    },
    data () {
      return {
        drawer: null,
        mini: false,
        right: null,
        message: '',
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
  @import '../stylus/main'
  @import '../css/main-style.css'
  

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

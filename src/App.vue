<template>
<main>
 <index></index>
</main>
</template>

<<script>
import index from './index.vue'
import navbar from './components/navbar.vue'

export default {
 name: 'main',
		components: {
		 index,
     navbar,
     wrapper: ''
		}  
}
</script>


<style lang="stylus">

  

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
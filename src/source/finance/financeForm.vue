<template>
    <div class="lss-form-warp">
        <h1>{{$route.params.title}}</h1>
        <p>{{$route.params.equation}}</p>
        <p>{{$route.params.description}}</p>
        <div class="con">
            <br>
            <AutomatedForm :formData="formData" @submitForm="onSubmitForm"></AutomatedForm>
        </div>
    </div>
</template>

<script>
    export default {
        name: "financeForm",
        data(){
            return {
              formData: []//["agencyId","areaId","countryId","companyName"]
            }
        },
        methods:{
            onSubmitForm:function (d) {
                console.log(d)
            }
        },
        created: function() {
            if(!this.$route.params){
                this.$route.path({name:'finance'});
                return false;
            };
            //console.log(this.$route.params.tableTh)
            var obj = this.$route.params.tableTh;
            obj.map((item,index)=>{
              console.log(item.key);
              //this.formData.push(item.key);
            });
        },
    }
</script>

<style scoped>

</style>

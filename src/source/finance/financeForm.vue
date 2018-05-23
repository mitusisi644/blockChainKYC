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
              formData: []
            }
        },
        methods:{
            onSubmitForm:function (d) {
                console.log(d)
            }
        },
        created: function() {
			var _this = this;
            var obj = this.$route.params.tableTh;
            if(!obj || this.$route.params.tableTh == 'undefined'){
				_this.$router.push('/finance');
                return true;
            };
            obj.map((item,index)=>{
              console.log(item.key);
              _this.formData.push(item.key);
            });
        },
    }
</script>

<style scoped>
</style>
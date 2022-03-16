const app = Vue.createApp({
    data() {
        return{
            title   : 'Mi Cuenta',
            cantidad: 600,
            enlace  : 'https://vuejs.org/guide/quick-start.html#without-build-tools',
            estado  : true,
            servicios: ['Efectivo', 'Cheuque', 'Depósito'],
            disabled : false
        }
    },
    methods: {
        agregarSaldo() {
            this.cantidad = this.cantidad+100
        },
        disminuirSaldo(){
            if(this.cantidad === 0){
                this.disabled = true;
                alert("SALDO EN CERO");
                return
            }
            this.cantidad = this.cantidad - 100
        }
    },
    computed: {
        colorCantidad(){
            return this.cantidad > 500 ? 'text-success':'text-danger';
        }
    }
});
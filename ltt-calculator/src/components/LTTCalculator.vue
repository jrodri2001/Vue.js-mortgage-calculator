<template>
<v-container>
  <v-row>
    <v-col>
       <h1>{{ msg }}</h1>
      <p v-if="description">
        {{ description }}
      </p>
    </v-col>
  </v-row>
  <v-row>
    <v-col>
        <v-text-field
        class="inputField"
        label="Property Price"
        :rules="rules"
        v-currency="{currency: 'CAD', locale: 'en-CA', valueAsInteger: false, valueRange: { min:0, max:20000000 }, allowNegative: false }"
        @change="calculate()"
        v-model="price"
        ref="price"
        outlined
      ></v-text-field>
      <v-checkbox
      v-model="isToronto"
      label="Property located in Toronto"
      @change="calculate()"
    ></v-checkbox>
    <v-checkbox
      v-model="firstTimeBuyer"
      label="First time buyer"
      @change="calculate()"
    ></v-checkbox>
    </v-col>
  </v-row>
  <v-row>
    <v-col>
      <h1>{{ result }}</h1>
    </v-col>
  </v-row>
</v-container>
</template>

<script>
import lttCalculator from 'ltt-calculator'
import { getValue } from "vue-currency-input";
export default {
  name: 'LTTCalculator',
  components: {
  },
  props: {
    msg: String,
    description: String,
  },
  data: () => ({
      rules: [
        value => !!value || 'Required.',
        value => (value && value.length >= 1) || 'Min 1 number',
      ],
      price: 0,
      numberValue: 0,
      errors: {},
      isToronto: false,
      firstTimeBuyer: false,
      result: 0
    }),
  methods: {
    calculate: function (){
      this.result = lttCalculator.calculate({
        purchasePrice: this.numberValue,
        isToronto: this.isToronto,
        firstTimeBuyer: this.firstTimeBuyer
      });
    }
  },
  watch: {
    price() {
      this.numberValue = getValue(this.$refs.price);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

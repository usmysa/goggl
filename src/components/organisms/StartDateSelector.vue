<template>
  <BottomSheet class="StartDateSelector">
    <BottomSheetHeader>
      <template v-slot:icon>
        <SvgIcon class="Record_IconTag" name="arrow" />
      </template>
      <template v-slot:title>Start date</template>
      <!-- TODO: クリックされたときに渡されたメソッドを実行する処理を書く -->
      <template v-slot:action>Save</template>
    </BottomSheetHeader>
  </BottomSheet>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import BottomSheet from '~/atoms/BottomSheet.vue';
import BottomSheetHeader from '~/molecules/BottomSheetHeader.vue';

@Component({
  components: {
    BottomSheet,
    BottomSheetHeader,
  },
})
export default class StartDateSelector extends Vue {
}
</script>

<style lang="scss" scoped>
.StartDateSelector {
  height: 240px;
}
</style>

<template>
  <div style="position: relative;padding-left: 200px">
    <div style="height: 100%;width: 200px;position: absolute;left: 0;top: 0;">
      <a-directory-tree multiple default-expand-all @select="onSelect" @expand="onExpand">
        <a-tree-node key="0-0" title="parent 0">
          <a-tree-node key="0-0-0" title="leaf 0-0" is-leaf />
          <a-tree-node key="0-0-1" title="leaf 0-1" is-leaf />
        </a-tree-node>
        <a-tree-node key="0-1" title="parent 1">
          <a-tree-node key="0-1-0" title="leaf 1-0" is-leaf />
          <a-tree-node key="0-1-1" title="leaf 1-1" is-leaf />
        </a-tree-node>
      </a-directory-tree>
    </div>
    <div style="width: 100%">
      <a-form-model
        ref="ruleForm"
        :model="form"
        :rules="rules"
        :label-col="labelCol"
        :wrapper-col="wrapperCol"
      >
        <a-row>
          <a-col :span="12">
            <a-form-model-item label="项目名称" prop="xmmc">
              <a-input v-model="form.xmmc"/>
            </a-form-model-item>
          </a-col>
          <a-col :span="12">
            <a-form-model-item label="责任单位" prop="zrdw">
              <a-input v-model="form.zrdw"/>
            </a-form-model-item>
          </a-col>
          <a-col :span="12">
            <a-form-model-item label="计划开工时间" prop="jhkgsj">
              <a-input v-model="form.jhkgsj"/>
            </a-form-model-item>
          </a-col>
          <a-col :span="12">
            <a-form-model-item label="计划结束时间" prop="jhjssj">
              <a-input v-model="form.jhjssj"/>
            </a-form-model-item>
          </a-col>
        </a-row>
      </a-form-model>
    </div>
  </div>
</template>

<script>
  export default {
  name: 'ItemSplit',
  data () {
    return {
      labelCol: { span: 8 },
      wrapperCol: { span: 14 },
      form:{
        xmmc:'',
        zrdw:'',
        jhkgsj:'',
        jhjssj:'',
      }
    }
  },
  created(){
  },
  methods:{
    onSelect(keys, event) {
      console.log('Trigger Select', keys, event);
    },
    onExpand() {
      console.log('Trigger Expand');
    },
  }
}
</script>

<style scoped>
</style>

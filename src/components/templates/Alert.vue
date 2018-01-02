<template>
    <div class="alert" :class="classes" role="alert">
        <span v-if="isIcon" class="icon">
          <i :class="icon"></i>
        </span>
        {{ message }}
        <button v-if="dismissible" type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
    </div>
</template>

<script>
    import Alert from './../scripts/Alert'
    export default Alert
</script>

<style scoped>
    @import './../styles/Alert.css';
</style>
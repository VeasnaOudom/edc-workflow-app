<script setup lang="ts">
// 1. Props received from Liferay
const props = defineProps({
  userName: { type: String, default: 'Manager' },
  taskContext: { type: String, default: 'General Review' }
})
</script>

<template>
  <div class="remote-nudge-container">
    <div class="nudge-header">
      <span class="pulse-icon"></span>
      <strong>Learning Nudge for {{ userName }}</strong>
    </div>
    <div class="nudge-content">
      <p>Context: {{ taskContext }}</p>
      <div class="draftable-mock">
        [ Draftable Comparison Viewer Loading... ]
      </div>
    </div>
  </div>
</template>

<style>
/* Your existing styles are fine */
.remote-nudge-container {
  border: 1px solid #e1e4e8;
  border-left: 5px solid #0052cc;
  background: #ffffff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
}
/* ... rest of your CSS ... */
</style>
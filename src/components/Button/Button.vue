<template>
    <button
        v-bind="$attrs"
        :class="rootClasses"
        :type="type"
        :disabled="computedDisabled"
    >
        <slot></slot>
    </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
    disabled: {
        type: Boolean,
    },
    /**
     * Color of the button
     * @values primary, secondary
     */
    variant: {
        type: String,
        validator: (value: string) => {
            return [
                'primary',
                'secondary'
            ].indexOf(value) >= 0
        }
    },
    /**
     * type of button
     * @values button, submit
     */
    type: {
        type: String,
        default: 'button',
        validator: (value: string) => {
            return [
                'button',
                'submit',
                'reset'
            ].indexOf(value) >= 0
        }
    },
    /**
     * Size of button
     * @values sm, md, lg
     */
    size: {
        type: String,
        validator: (value: string) => {
            return [
                'sm',
                'md',
                'lg'
            ].indexOf(value) >= 0
        }
    }
})

const rootClasses = computed(props => () => {
    return [
        'btn',
        'btn-vmw',
        'btn-vmw--' + props.size,
        'btn-vmw--' + props.variante
    ]
})

const computedDisabled = computed(props => () => {
    if (props.disabled) return true
    return null
})
</script>

<script lang="ts">
    import browser from "webextension-polyfill";
    
    export let link: string
    export let text: string

    const handleClick = () => {
        browser.tabs.create({url: link})
    }
</script>

<span on:click={handleClick}>{text}</span>

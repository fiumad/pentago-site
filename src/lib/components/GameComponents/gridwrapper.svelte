<script>
    import Grid from './grid.svelte';
</script>

<style>
    .Grid-Wrapper {
        display: grid;
        margin: 0 auto;
        max-width: 30%;
        grid-template-columns: repeat(2,1fr);
        grid-template-rows: repeat(2,1fr);
        grid-row-gap: 20px;
        grid-column-gap: 20px;
    }
</style>

<div class="Grid-Wrapper">
    <Grid quad={0}/>
    <Grid quad={1}/>
    <Grid quad={2}/>
    <Grid quad={3}/>
</div>



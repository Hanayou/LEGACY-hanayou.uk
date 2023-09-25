<script lang="ts">
    export let title: string = "Title";
    export let position: string = "Position";
    export let location: string = "Location";
    export let date: string = "Date";
    export let content: string = "Content";
</script>

<div class="collapse collapse-arrow border border-base-300 bg-base-200">
    <input type="checkbox" class="peer"/>
    <div class="collapse-title text-xl font-medium">
        <h2>{title} <span class="text-sm font-light">({position})</span></h2>
        <p class="text-xs font-light text-primary">{location} ・ {date}</p>
    </div>
    <div class="collapse-content"> 
        <p>
            {content}
        </p>
    </div>
</div>
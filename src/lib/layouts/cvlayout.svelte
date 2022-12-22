<script>
  import "../../app.css";
  import "../../../node_modules/normalize.css/normalize.css";
</script>

<div class="container">
  <slot name="top" />

  <div class="wrapper">
    <div class="left">
      <slot name="left" />
    </div>
    <div class="right">
      <slot name="right" />
    </div>
  </div>
</div>

<style>
  .container {
    color: var(--white);
    margin-left: auto;
    margin-right: auto;
    width: 90%;
  }

  .wrapper {
    column-gap: 1rem;
    display: flex;
    flex-direction: column;
  }

  @media (min-width: 640px) {
    .wrapper {
      flex-direction: row;
    }

    .left {
      width: 70%;
    }

    .right {
      width: 30%;
    }
  }
</style>

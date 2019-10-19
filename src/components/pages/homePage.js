import carousel from "./pages/carousel";

export default class homePage {
  render() {
    return (
      <Grid
        container
        direction="row"
        justify="center"
      >
        <Grid item xs={12} style={{ paddingTop: 0 }}>
          <Carousel />
        </Grid>
        <Grid container item xs={12}>
    );
  }
}

export default function RewriteModule () {
  this.extendRoutes((routes) => {
    routes.map((route) => {
      route.path = route.path.replace(/\/$/, "");
      return route
    })
  })
}

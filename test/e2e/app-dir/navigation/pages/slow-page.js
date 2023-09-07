export default function Page() {
  return 'Hello from slow page'
}

export async function getServerSideProps({ resolvedUrl }) {
  // sleep for 100s
  if (!resolvedUrl.includes('?_rsc')) {
    // only stall on the navigation, not prefetch
    await new Promise((resolve) => setTimeout(resolve, 100000))
  }
  return {
    props: {},
  }
}

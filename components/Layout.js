function Layout(props) {
  return (
    <div className='page-layout'>
      {props.children}
      <style jsx global>{`
        :root {
          --containerWidth: 100vw;
        }

        @media (min-width: 576px) {
          :root {
            --containerWidth: 70vw;
          }
        }
        @media (min-width: 768px) {
          :root {
            --containerWidth: 60vw;
          }
        }
        @media (min-width: 992px) {
          :root {
            --containerWidth: 50vw;
          }
        }
        @media (min-width: 1200px) {
          :root {
            --containerWidth: 40vw;
          }
        }
      `}</style>
    </div>
  );
}

export default Layout;

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
            --containerWidth: 50vw;
          }
        }
        @media (min-width: 768px) {
          :root {
            --containerWidth: 67vw;
          }
        }
        @media (min-width: 992px) {
          :root {
            --containerWidth: 50vw;
          }
        }
        @media (min-width: 1200px) {
          :root {
            --containerWidth: 50vw;
          }
        }
      `}</style>
    </div>
  );
}

export default Layout;

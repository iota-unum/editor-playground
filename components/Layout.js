function Layout(props) {
  return (
    <div className='page-layout'>
      {props.children}
      <style jsx global>{`
        .page-layout {
          background-color: steelblue;
          height: 100%;
        
        }
      `}</style>
    </div>
  );
}

export default Layout;

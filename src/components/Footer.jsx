export default function Footer() {
  return (
    <footer style={{ padding: 20, textAlign: "center", borderTop: "1px solid #eee", marginTop: 40 }}>
      <p>© {new Date().getFullYear()} TravelBlog — Built with Next.js</p>
    </footer>
  );
}

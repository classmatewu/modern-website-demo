import { Link } from '@modern-js/runtime/router';
import './index.css';

const Index = () => (
  <div className="container">
    <main>
      <div className="logo">
        <img
          src="https://lf3-static.bytednsdoc.com/obj/eden-cn/ylaelkeh7nuhfnuhf/modernjs-cover.png"
          width="300"
          alt="Modern.js Logo"
        />
      </div>
      <p className="description">
        Hello！Get started by editing{' '}
        <code className="code">src/Index.tsx</code>
      </p>
      <div className="grid">
        <Link to="/introduction" className="card">
          <h2>Introduction</h2>
        </Link>
        <Link to="/about" className="card">
          <h2>About</h2>
        </Link>
      </div>
    </main>
    <footer className="footer">
      <a href="https://modernjs.dev" target="_blank" rel="noopener noreferrer">
        Powered by Modern.js
      </a>
    </footer>
  </div>
);

export default Index;

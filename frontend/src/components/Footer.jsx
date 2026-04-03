// // components/Footer.jsx
// const Footer = () => {
//   return (
//     <footer className="border-t border-[#9BA8AB]/08 px-10 pt-12 pb-8 bg-[#11212D]/40 mt-5">
//       <div className="flex justify-between items-start mb-10 flex-wrap gap-8">
//         {/* Brand */}
//         <div>
//           <div className="flex items-baseline gap-1 mb-2">
//             <span
//               className="text-[#CCD0CF] tracking-[3px]"
//               style={{
//                 fontFamily: "'Bebas Neue', sans-serif",
//                 fontSize: "1.6rem",
//               }}
//             >
//               LuxDrive
//             </span>
//             <span
//               className="text-[#4A5C6A] tracking-[3px]"
//               style={{
//                 fontFamily: "'Bebas Neue', sans-serif",
//                 fontSize: "1.6rem",
//               }}
//             >
//               .
//             </span>
//           </div>
//           <p className="text-[11px] text-[#4A5C6A] leading-relaxed max-w-[200px] tracking-wide">
//             Gestión de flota de lujo. Donde la ingeniería no tiene límites.
//           </p>
//         </div>

//         {/* Links */}
//         <div className="flex gap-12">
//           <div className="flex flex-col gap-1">
//             <h4 className="text-[10px] tracking-[2px] uppercase text-[#9BA8AB] mb-2">
//               Navegación
//             </h4>
//             {["Inicio", "Vehículos", "Agregar"].map((l) => (
//               <a
//                 key={l}
//                 href={
//                   l == "Vehículos"
//                     ? document
//                         .getElementById("flota")
//                         ?.scrollIntoView({ behavior: "smooth" })
//                     : {}
//                 }
//                 className="text-[12px] text-[#4A5C6A] hover:text-[#9BA8AB] transition-colors no-underline"
//               >
//                 {l}
//               </a>
//             ))}
//           </div>
//           <div className="flex flex-col gap-1">
//             <h4 className="text-[10px] tracking-[2px] uppercase text-[#9BA8AB] mb-2">
//               Proyecto
//             </h4>
//             {["GitHub", "Documentación", "API REST"].map((l) => (
//               <a
//                 key={l}
//                 href="#"
//                 className="text-[12px] text-[#4A5C6A] hover:text-[#9BA8AB] transition-colors no-underline"
//               >
//                 {l}
//               </a>
//             ))}
//           </div>
//         </div>

//         {/* Social */}
//         <div>
//           <h4 className="text-[10px] tracking-[2px] uppercase text-[#9BA8AB] mb-3">
//             Redes
//           </h4>
//           <div className="flex gap-2">
//             {/* GitHub */}
//             <a
//               href="https://github.com/SantiagoAyala2118"
//               target="_blank"
//               className="w-9 h-9 rounded-lg bg-[#1E3040]/60 border border-[#9BA8AB]/10 flex items-center justify-center text-[#4A5C6A] hover:text-[#CCD0CF] hover:border-[#9BA8AB]/25 transition-all"
//             >
//               <svg
//                 width="15"
//                 height="15"
//                 viewBox="0 0 24 24"
//                 fill="currentColor"
//               >
//                 <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
//               </svg>
//             </a>
//             {/* LinkedIn */}
//             <a
//               href="https://www.linkedin.com/in/santiago-tom%C3%A1s-ayala-641436390/"
//               target="_blank"
//               className="w-9 h-9 rounded-lg bg-[#1E3040]/60 border border-[#9BA8AB]/10 flex items-center justify-center text-[#4A5C6A] hover:text-[#CCD0CF] hover:border-[#9BA8AB]/25 transition-all"
//             >
//               <svg
//                 width="15"
//                 height="15"
//                 viewBox="0 0 24 24"
//                 fill="currentColor"
//               >
//                 <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
//               </svg>
//             </a>
//             {/* Instagram */}
//             <a
//               href="https://www.instagram.com/ssanti21_/"
//               target="_blank"
//               className="w-9 h-9 rounded-lg bg-[#1E3040]/60 border border-[#9BA8AB]/10 flex items-center justify-center text-[#4A5C6A] hover:text-[#CCD0CF] hover:border-[#9BA8AB]/25 transition-all"
//             >
//               <svg
//                 width="15"
//                 height="15"
//                 viewBox="0 0 24 24"
//                 fill="currentColor"
//               >
//                 <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
//               </svg>
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* Bottom */}
//       <div className="flex justify-between items-center pt-6 border-t border-[#9BA8AB]/06 flex-wrap gap-3">
//         <p className="text-[11px] text-[#4A5C6A] tracking-wide">
//           © 2026 LuxDrive · Todos los derechos reservados
//         </p>
//         <p className="text-[11px] text-[#253745] tracking-wide">
//           Desarrollado por{" "}
//           <a
//             href="https://github.com/SantiagoAyala2118"
//             target="_blank"
//             className="text-[#4A5C6A] hover:text-[#9BA8AB] transition-colors no-underline"
//           >
//             Santiago Tomas Ayala
//           </a>{" "}
//           — TP N°2 · Taller de Lenguajes III
//         </p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

// components/Footer.jsx
const Footer = () => {
  return (
    <footer className="border-t border-[#9BA8AB]/08 px-10 pt-10 pb-8 bg-[#11212D]/40 mt-16">
      <div className="flex justify-between items-center flex-wrap gap-8">
        {/* Brand */}
        <div>
          <div className="flex items-baseline gap-1 mb-2">
            <span
              className="text-[#CCD0CF] tracking-[3px]"
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "1.6rem",
              }}
            >
              LuxDrive
            </span>
            <span
              className="text-[#4A5C6A] tracking-[3px]"
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "1.6rem",
              }}
            >
              .
            </span>
          </div>
          <p className="text-[11px] text-[#4A5C6A] leading-relaxed max-w-[200px] tracking-wide">
            Donde la ingeniería no tiene límites.
          </p>
        </div>

        {/* Social */}
        <div className="flex flex-col gap-3">
          <h4 className="text-[10px] tracking-[2px] uppercase text-[#9BA8AB]">
            Redes
          </h4>
          <div className="flex gap-2">
            <a
              href="https://github.com/SantiagoAyala2118"
              target="_blank"
              className="w-9 h-9 rounded-lg bg-[#1E3040]/60 border border-[#9BA8AB]/10 flex items-center justify-center text-[#4A5C6A] hover:text-[#CCD0CF] hover:border-[#9BA8AB]/25 transition-all"
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/santiago-tom%C3%A1s-ayala-641436390/"
              target="_blank"
              className="w-9 h-9 rounded-lg bg-[#1E3040]/60 border border-[#9BA8AB]/10 flex items-center justify-center text-[#4A5C6A] hover:text-[#CCD0CF] hover:border-[#9BA8AB]/25 transition-all"
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/ssanti21_/"
              target="_blank"
              className="w-9 h-9 rounded-lg bg-[#1E3040]/60 border border-[#9BA8AB]/10 flex items-center justify-center text-[#4A5C6A] hover:text-[#CCD0CF] hover:border-[#9BA8AB]/25 transition-all"
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="flex justify-between items-center pt-6 mt-8 border-t border-[#9BA8AB]/06 flex-wrap gap-3">
        <p className="text-[11px] text-[#4A5C6A] tracking-wide">
          © 2026 LuxDrive · Todos los derechos reservados
        </p>
        <p className="text-[11px] text-[#253745] tracking-wide">
          Desarrollado por{" "}
          <a
            href="https://github.com/SantiagoAyala2118"
            target="_blank"
            className="text-[#4A5C6A] hover:text-[#9BA8AB] transition-colors no-underline"
          >
            Santiago Tomás Ayala
          </a>{" "}
          — TP N°2 · Taller de Lenguajes de Programacion III
        </p>
      </div>
    </footer>
  );
};

export default Footer;

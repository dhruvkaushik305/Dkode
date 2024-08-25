import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import db from "@/db";

enum Role {
  "student" = "STUDENT",
  "teacher" = "TEACHER",
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
        role: {},
      },
      authorize: async (credentials) => {
        return null;
        // if (!credentials.email || !credentials.password) return null;

        // const existingUser = await db.user.findUnique({
        //   where: { email: credentials.email as string },
        // });

        // if (existingUser) {
        //   console.log("user exists, checking password");
        //   const verifiedPassword = await bcrypt.compare(
        //     credentials.password as string,
        //     existingUser.password as string,
        //   );
        //   if (!verifiedPassword) return null;
        //   else return existingUser;
        // }

        // console.log("user doesn't exist, creating user");

        // const hashedPassword = await bcrypt.hash(
        //   credentials.password as string,
        //   10,
        // );
        // const newUser = await db.user.create({
        //   data: {
        //     email: credentials.email as string,
        //     password: hashedPassword,
        //     role: credentials.role as Role,
        //   },
        // });
        // return newUser;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        // token.role = user.role;
        // token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      // session.user.role = token.role;
      // session.user.id = token.id as string;
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
});

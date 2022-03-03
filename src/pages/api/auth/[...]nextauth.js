import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"

export default NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_API_CLIENTID,
      clientSecret: process.env.GITHUB_API_CLINTE_SECRET,
      scope: "read:user"
    }),
  ],
})
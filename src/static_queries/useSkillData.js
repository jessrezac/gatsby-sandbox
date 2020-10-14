import { graphql, useStaticQuery } from "gatsby"

export default function useSkillData() {
  const data = useStaticQuery(graphql`
    query getSkillData {
      allSkillYaml {
        edges {
          node {
            id
            icon
            frameworks {
              id
              icon
            }
          }
        }
      }
    }
  `)
  return data.allSkillYaml.edges
}
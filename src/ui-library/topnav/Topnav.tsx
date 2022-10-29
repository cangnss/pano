import { PlusIcon } from "@radix-ui/react-icons";
import type { FC } from "react";
import { useUserContext } from "~/features/auth/user-context";
import {
  Box,
  CenteredContainer,
  GappedBox,
  Link,
  ThemeToggle,
} from "~/ui-library";
import { IconButton } from "../IconButton";
import { UserDropdown } from "../UserDropdown";
import { SearchInput } from "./SearchInput";

export const Topnav: FC = () => {
  const user = useUserContext();
  console.log(user);
  return (
    <Box css={{ px: "$2", backgroundColor: "$gray2" }}>
      <CenteredContainer>
        <GappedBox as="nav" css={{ padding: "$2 0", alignItems: "center" }}>
          <Link prefetch="intent" to="/">
            <GappedBox css={{ alignItems: "center" }}>pano</GappedBox>
          </Link>
          <Box css={{ px: 10, flex: 1 }}>
            <SearchInput />
          </Box>
          <Box css={{ display: "flex", gap: 10, alignItems: "center" }}>
            {user ? (
              <>
                <IconButton as={Link} to="/send">
                  <PlusIcon />
                </IconButton>
                <ThemeToggle />
                <UserDropdown login={user.username} userId={user.id} />
              </>
            ) : (
              <>
                <ThemeToggle />
                <Link to="/login">Giriş</Link>
              </>
            )}
          </Box>
        </GappedBox>
      </CenteredContainer>
    </Box>
  );
};

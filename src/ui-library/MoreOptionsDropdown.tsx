import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import { Link } from "@remix-run/react";
import type { FC } from "react";
import { canUserEdit } from "~/features/auth/can-user-edit";
import { useUserContext } from "~/features/auth/user-context";
import type { Post } from "~/models/post.server";
import { styled } from "~/stitches.config";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./Dropdown";
import { IconButton } from "./IconButton";

const DotsButton = styled(IconButton, {
  borderRadius: 5,
  height: 25,
  width: 25,
  color: "$gray11",
});

const Item = styled(DropdownMenuItem, {
  minWidth: 0,
  // padding: "$1",
});

interface Props {
  post: Post;
}

export const MoreOptionsDropdown: FC<Props> = ({ post }) => {
  const user = useUserContext();

  const ownerItems: JSX.Element[] = [];
  if (canUserEdit(user, post)) {
    ownerItems.push(
      <Item key="edit" as={Link} to={`/posts/${post.id}/edit`}>
        Düzenle
      </Item>
    );
    ownerItems.push(<Item key="delete">Sil</Item>);
  }

  const menuItems = [...ownerItems];

  if (menuItems.length === 0) {
    return null;
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <DotsButton color="transparent" aria-label="Daha fazla seçenek">
          <DotsHorizontalIcon />
        </DotsButton>
      </DropdownMenuTrigger>

      <DropdownMenuContent>{ownerItems}</DropdownMenuContent>
    </DropdownMenu>
  );
};

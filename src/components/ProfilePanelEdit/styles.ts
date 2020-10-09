import styled, { css } from 'styled-components'
import { FcSimCard } from 'react-icons/fc'
export const Container = styled.div`
  padding-bottom: 12px;

  margin-top: 8px;

  .profile-cover {
    width: 100%;
    height: 54px;
    background: var(--color-background);
  }
  .profile-picture {
    width: 72px;
    height: 72px;
    /* border-radius: 50%;
    border: 2px solid var(--color-background);
    box-shadow: inset 0 1.5px 3px 0 var(--black-a15, rgba(0, 0, 0, 0.15)),
      0 1.5px 3px 0 var(--black-a15, rgba(0, 0, 0, 0.15)); */
  }
  .profile-picture:not(.list) {
    margin: -38px auto 12px;
    display: flex;
  }
  h1 {
    font-size: 16px;
    font-weight: 600;
    text-align: center;
    // color: var(--color-black);
  }
  h2 {
    margin-top: 4px;
    font-size: 12px;
    font-weight: 400;
    text-align: center;
    // color: var(--color-gray);
  }
  .separator {
    width: 100%;
    border-bottom: 1px solid var(--color-separator);
    margin: 16px 0 12px;
  }
  .key-value {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 12px;
    margin: 0 12px;
    padding: 0 0 12px 0;
    font-weight: 600;

    .key {
      // color: var(--color-gray);
    }
    .value {
      color: var(--color-light);
    }

    .value-all {
      width: 100%;
      min-height: 300px;
    }
  }
`

const iconCSS = css`
  width: 24px;
  height: 24px;
  margin-right: 4px;
`

export const LikeIcon = styled(FcSimCard)`
  ${iconCSS}
`
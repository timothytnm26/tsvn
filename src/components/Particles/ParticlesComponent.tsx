/*
   Copyright (C), 2023-2024, Sara Echeverria (bl33h)
   Author: Sara Echeverria
   FileName: ParticlesComponent.tsx
   Version: I
   Creation: 02/06/2023
   Last modification: 02/06/2023
*/

import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";

interface ParticlesComponentProps {
  particlesOptions: object;
  className?: string;
  id?: string;
}

const ParticlesComponent: React.FC<ParticlesComponentProps> = (props) => {
  const { particlesOptions, className, id } = props;

  let isInitialized = false;

  const particlesInit = useCallback(async (engine: any) => {
    if (!isInitialized) {
      await loadFull(engine);
      isInitialized = true;
    }
  }, []);

  const particlesLoaded = useCallback(async (container: any) => {
    await container;
  }, []);

  return (
    <Particles
      id={id}
      className={className}
      init={particlesInit}
      loaded={particlesLoaded}
      options={particlesOptions}
    />
  );
};

export default ParticlesComponent;

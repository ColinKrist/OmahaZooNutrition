CREATE TABLE IF NOT EXISTS `AnimalDietDatabase_OHDZA_be_ufe_combined`.`DIET_SUB_HISTORY` (
  `ID` INT(10) NOT NULL,
  `StartDate` DATETIME NULL,
  `DIETID` INT(10) NULL,
  `FOODID` INT(10) NULL,
  `AMOUNT` DOUBLE NULL,
  `UNITID` INT(10) NULL,
  `SU` TINYINT(1) NOT NULL,
  `M` TINYINT(1) NOT NULL,
  `T` TINYINT(1) NOT NULL,
  `W` TINYINT(1) NOT NULL,
  `R` TINYINT(1) NOT NULL,
  `F` TINYINT(1) NOT NULL,
  `S` TINYINT(1) NOT NULL,
  `SORT` INT(10) NULL,
  `TOTE` INT(10) NULL,
  `FEEDING` INT(10) NULL,
  `LINENOTES` VARCHAR(255) NULL,
  `BGTUserID` VARCHAR(255) NULL,
  `IND_AMOUNT` INT(10) NULL,
  `NUM_ANIMALS` INT(10) NULL,
  `FRQ_WEEKS` INT(10) NULL,
  `FRQ_ROTATION` INT(10) NULL,
  INDEX `FOODID` (`FOODID` ASC),
  INDEX `BGTUserID` (`BGTUserID` ASC),
  INDEX `NUM_ANIMALS` (`NUM_ANIMALS` ASC),
  PRIMARY KEY (`ID`),
  INDEX `UNITID` (`UNITID` ASC),
  INDEX `ID` (`ID` ASC),
  CONSTRAINT `DIET TABLETblDietSubHistory`
    FOREIGN KEY (`DIETID`)
    REFERENCES `AnimalDietDatabase_OHDZA_be_ufe_combined`.`DIET_TABLE` (`DIETID`)
    ON DELETE RESTRICT
    ON UPDATE RESTRICT,
  CONSTRAINT `UNIT_TABLEDIET_SUB_HISTORY`
    FOREIGN KEY (`UNITID`)
    REFERENCES `AnimalDietDatabase_OHDZA_be_ufe_combined`.`UNIT_TABLE` (`UNITID`)
    ON DELETE RESTRICT
    ON UPDATE RESTRICT,
  CONSTRAINT `FOOD_TABLEDIET_SUB_HISTORY`
    FOREIGN KEY (`FOODID`)
    REFERENCES `AnimalDietDatabase_OHDZA_be_ufe_combined`.`FOOD_TABLE` (`FOODID`)
    ON DELETE RESTRICT
    ON UPDATE RESTRICT,
  CONSTRAINT `EMPLOYEE_TABLEDIET_SUB_HISTORY`
    FOREIGN KEY (`BGTUserID`)
    REFERENCES `AnimalDietDatabase_OHDZA_be_ufe_combined`.`EMPLOYEE_TABLE` (`UserLogin`)
    ON DELETE RESTRICT
    ON UPDATE RESTRICT)